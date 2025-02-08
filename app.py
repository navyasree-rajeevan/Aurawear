from flask import Flask, request, jsonify, render_template, redirect, url_for
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

def generate_dress_recommendation(skin_tone, event, dress_descriptions):
    """
    Sends the user’s skin tone, event, and dress descriptions to Gemini API
    and returns the best dress selection.
    """
    input_text = f"""
    A user is selecting an outfit. Their details:
    - Skin Tone: {skin_tone}
    - Event: {event}
    - Dress Options:
      1. {dress_descriptions[0]}
      2. {dress_descriptions[1]}
      3. {dress_descriptions[2]}

    Please select the most suitable dress based on the event and skin tone.
    Return only the best choice.
    """

    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {GEMINI_API_KEY}'
    }
    data = {
        "contents": [{"parts": [{"text": input_text}]}]
    }

    response = requests.post(GEMINI_ENDPOINT, headers=headers, json=data)
    
    if response.status_code == 200:
        response_json = response.json()
        try:
            # Extract AI response
            best_dress = response_json["candidates"][0]["content"]["parts"][0]["text"]
            return best_dress
        except (KeyError, IndexError):
            return "Error: Unable to process the response."
    else:
        return f"Error: API request failed with status code {response.status_code}."

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/skintone', methods=['GET', 'POST'])
def skintone():
    if request.method == 'POST':
        skin_tone = request.form['skin_tone']
        # Redirect to the event chooser page with the skin_tone as a query parameter
        return redirect(f'/event-chooser?skin_tone={skin_tone}')
    return render_template('skin-tone.html')

@app.route('/event-chooser', methods=['GET', 'POST'])
def eventchooser():
    skin_tone = request.args.get('skin_tone')
    
    if request.method == 'POST':
        event = request.form['event']
        return redirect(url_for('dress', skin_tone=skin_tone, event=event))
    
    return render_template('event-chooser.html', skin_tone=skin_tone)

@app.route('/dress', methods=['GET', 'POST'])
def dress():
    skin_tone = request.args.get('skin_tone')
    event = request.args.get('event')
    
    if request.method == 'POST':
        dress1 = request.form['dress1']
        dress2 = request.form['dress2']
        dress3 = request.form['dress3']
        
        # Send the form data to the Gemini API for recommendation
        dress_descriptions = [dress1, dress2, dress3]
        best_dress = generate_dress_recommendation(skin_tone, event, dress_descriptions)
        
        return render_template('result.html', best_dress=best_dress)
    
    return render_template('Dress.html', skin_tone=skin_tone, event=event)

@app.route('/api/generate', methods=['POST'])
def api_generate():
    """
    API endpoint that receives skin tone, event, and dress descriptions,
    calls Gemini API, and returns the best dress selection.
    """
    data = request.json

    skin_tone = data.get('skin_tone')
    event = data.get('event')
    dress_descriptions = data.get('dress_descriptions')

    if not skin_tone or not event or not dress_descriptions or len(dress_descriptions) != 3:
        return jsonify({"error": "Invalid input. Please provide skin tone, event, and exactly 3 dress descriptions."}), 400

    best_dress = generate_dress_recommendation(skin_tone, event, dress_descriptions)
    
    return jsonify({"best_dress": best_dress})

if __name__ == '__main__':
    app.run(debug=True, port=5500)

