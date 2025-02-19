Project name:AURA WEAR 🎯

Team Name: Tinkera
 
 Team Members:
- Member 1: Krishna A S - SCMS School of Engineering and Technology
- Member 2: Navyasree Rajeevan - SCMS School of Engineering and Technology
- Member 3: Nandana M T -  SCMS School of Engineering and Technology

### Hosted Project Link
https://famous-banoffee-4b2a93.netlify.app/

### Project Description
"This project is a web application that helps users choose the most suitable dress based on their skin tone, event type, and provided dress descriptions. Utilizing Python Flask and the Gemini API, it intelligently selects the best dress for the user."

### The Problem statement
"The challenge is to develop a web application that seamlessly integrates user inputs—skin tone, event type, and dress descriptions— to recommend the most suitable dress using the Gemini API. The goal is to create an intelligent system that enhances user experience by accurately selecting the best dress for each unique combination of inputs."

### The Solution
Develop a web application using Python Flask for the backend and HTML/CSS/JavaScript for the frontend. Integrate the Gemini API to analyze user inputs—skin tone, event type, and dress descriptions—and recommend the most suitable dress. Display the selected dress on the results page for the user.

## Technical Details
### Technologies/Components Used
For Software:
- HTML,CSS,Java Script,Python
- Python Flask,HTML/CSS/JavaScript
- Chatgpt,Copilot,Perplexity,DeepSeek

### Project Documentation
For Software:

# Screenshots (Add at least 3)
![WhatsApp Image 2025-02-09 at 10 25 40_aa0f7d88](https://github.com/user-attachments/assets/6334ead5-72be-49ec-a5ab-18ee6e4c52bd)
The page to select skin tone


![WhatsApp Image 2025-02-09 at 10 25 52_d8b00e0f](https://github.com/user-attachments/assets/b6bb6183-ab34-45f2-9d92-6eb384936c56)
The page to select event

![WhatsApp Image 2025-02-09 at 10 25 52_2d03aca9](https://github.com/user-attachments/assets/c4d66a0e-f71d-4447-9360-d7d0d6b866d5)
The page where output is displayed


# Diagrams
+-------------------------+               +------------------------+
|      Frontend (Client)   |               |      Backend (Flask)    |
|                         | <------------->|                        |
|   1. Home Page           |               | 1. /select_skin_tone    |
|   2. Skin Tone Selector  |               | 2. /select_event        |
|   3. Event Chooser       |               | 3. /submit_dress_description  |
|   4. Dress Page          |               | 4. Call Gemini API      |
|   5. Result Page         |               |                        |
+-------------------------+               +------------------------+
               |                                   |
               |                                   v
               |                          +---------------------+
               |                          |  Gemini API (External)|
               |                          +---------------------+
               |                           - Input: Dress data, skin tone, event
               |                           - Output: Recommended dress
               |                                      |
               v                                      v
            (Result Display to User)

Frontend (Client): The user interacts with various pages, including the Home Page, Skin Tone Selector, Event Chooser, Dress Page, and Result Page. The frontend collects user inputs and communicates with the backend.

Backend (Flask): The Flask backend handles routes for selecting skin tone, choosing events, and submitting dress descriptions. It processes user inputs, calls the Gemini API, and returns the recommended dress to the frontend.

For Hardware:

# Schematic & Circuit
flowchart LR
    subgraph User
        U1[Home Page] --> U2[Skin Tone Selector]
        U2 --> U3[Event Chooser]
        U3 --> U4[Dress Page]
        U4 --> U5[Result Page]
    end

    subgraph Backend
        B1[/select_skin_tone] --> B2[/select_event]
        B2 --> B3[/submit_dress_description]
        B3 --> B4[Call Gemini API]
        B4 --> B5[Process API Response]
    end

    subgraph Gemini_API
        B4 --> GA1[Gemini API Endpoint]
    end

    U5 --> |Displays Recommended Dress| U6[User]
    U4 --> B3
    GA1 --> B5
    B5 --> U5
    B1 --> U2
    B2 --> U3
    B3 --> U4

User Interaction:

Home Page: The user starts here.

Skin Tone Selector: The user selects their skin tone.

Event Chooser: The user chooses the event.

Dress Page: The user uploads dress descriptions.

Result Page: The user sees the recommended dress.

Backend (Flask):

/select_skin_tone: Handles skin tone selection.

/select_event: Handles event selection.

/submit_dress_description: Processes dress descriptions and calls Gemini API.

Call Gemini API: Communicates with the Gemini API for recommendations.

Process API Response: Processes the response from the API and sends it back to the frontend.

Gemini API:

Gemini API Endpoint: The external API that provides the dress recommendation

graph TD;
    subgraph Frontend (Client)
        A[Home Page] --> B[Skin Tone Selector]
        B --> C[Event Chooser]
        C --> D[Dress Page]
        D --> E[Result Page]
    end

    subgraph Backend (Flask)
        H[/select_skin_tone] --> I[/select_event]
        I --> J[/submit_dress_description]
        J --> K[Call Gemini API]
        K --> L[Process API Response]
    end

    subgraph Gemini API (External)
        K --> M[Gemini API Endpoint]
    end

    E -->|Displays Recommended Dress| N[User]

    D --> J
    M --> L
    L --> E
    H --> B
    I --> C
    J --> D

Frontend (Client): The user navigates through the Home Page, Skin Tone Selector, Event Chooser, Dress Page, and Result Page.

Backend (Flask): The Flask backend routes handle the selection of skin tone, event, and submission of dress descriptions, and it calls the Gemini API.

Gemini API (External): The backend sends data to the Gemini API, which processes the request and returns the recommended dress.

User: The recommended dress is displayed to the user on the Result Page.

# Build Photos
![WhatsApp Image 2025-02-09 at 10 27 20_0c52da7b](https://github.com/user-attachments/assets/8af18337-8b31-4b9a-aa39-ee0c6a9d06db)



![WhatsApp Image 2025-02-09 at 10 25 21_fb101ee3](https://github.com/user-attachments/assets/bc56fa90-59b6-45c2-858c-185b620d213f)
![WhatsApp Image 2025-02-09 at 10 25 40_2d7bab5c](https://github.com/user-attachments/assets/e8955395-e43b-4c3a-9302-ed268a9bcc0d)
![WhatsApp Image 2025-02-09 at 10 25 52_996dee2f](https://github.com/user-attachments/assets/21455510-c8b3-4698-848b-e86ed254df4f)
![WhatsApp Image 2025-02-09 at 10 25 52_2bad4bc0](https://github.com/user-attachments/assets/ae0d595f-7ff2-4430-a23e-f19b53a476c4)





![WhatsApp Image 2025-02-09 at 10 35 57_60c73cd9](https://github.com/user-attachments/assets/12864d11-0a54-4dfc-be7e-55cfd4c57107)


![WhatsApp Image 2025-02-09 at 10 25 52_0f892c44](https://github.com/user-attachments/assets/5675af0f-2822-474e-a69f-32beba7eccc1)


### Project Demo
# Video
https://drive.google.com/file/d/1h5gwad9rkpS3aOXBvEOpJsYyThOFWn6Y/view?usp=drivesdk

## Team Contributions
- Krishna A S:Front end-HTML CSS
- Nandana M T:Resource collection,routing
- Navyasree Rajeevan:Java Script

---
Made with ❤️ at TinkerHub
