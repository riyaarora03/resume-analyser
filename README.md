# ASKMYRESUME   

To build an intelligent system that analyzes resumes and generates relevant questions and answers which can help candidates to better prepare, boosting their confidence and readiness.   


     
<img width="800" alt="image" src="https://github.com/riyaarora03/resume-analyser/blob/main/assets/Screenshot%202024-12-31%20at%208.31.21%E2%80%AFPM.png">

## TECHNOLOGIES USED
#### 1. Natural Language Processing
• Named Entity Recognition (NER)   
• Retrieval-Augmented Generation (RAG-Chain)
#### 2. Google Gemini 1.5-Flash

## APPLICATION OF GEN-AI IN THE PROJECT         
<img width="800" alt="image" src="https://github.com/riyaarora03/resume-analyser/blob/main/assets/Screenshot%202024-12-31%20at%208.51.46%E2%80%AFPM.png">


## IMPLEMENTATION
### Training of NER Model
• Data Collection: Model is fed large datasets (e.g., text, images, or audio) based on its purpose.   
• Model Building: Neural networks with interconnected layers learn patterns by adjusting connection weights.   
• Optimization: Model predictions are compared to actual outputs using a loss function, and parameters are updated.   
• Learning from Errors: Weights are iteratively adjusted using techniques like gradient descent to minimize the loss function and improve predictions.   
###  Working of RAG (Retrieval Augmented Generation)
• Tokenization: Use an NLP library to tokenize large text data into sentences or paragraphs.   
• Chunking: Group tokens into manageable chunks of a predefined size to ensure efficient processing.    
• Embedding Generation: Convert chunks into dense vector embeddings using a pre-trained model like SentenceTransformers.    
• Store in Vector Database: Save the generated embeddings into a vector database like ChromaDB for efficient similarity searches.    
• Query Processing: Accept a user query, convert it into an embedding using the same model.  
• Document Retrieval: Use the query embedding to retrieve relevant chunks/documents from the vector database based on cosine similarity.   
• Augment Prompt: Combine the original query with retrieved documents to create an augmented prompt.   
• Pass to LLM: Send the augmented prompt to an LLM to generate a response.    
• Output Generation: Return the final response, which includes detailed and context-specific answers or generated questions.         

<img width="800" alt="image" src="https://github.com/riyaarora03/resume-analyser/blob/main/assets/Screenshot%202024-12-31%20at%208.46.39%E2%80%AFPM.png">

- The RAG Chain produces a responsive Q&A system on the frontend.   
- It effectively retrieves relevant information and generates accurate answers for user queries.   
- Efficiently handles subtopics, providing detailed, context-specific responses.    
- Demonstrates improved relevance, clarity, and user engagement.      
- Showcases seamless integration of retrieval and generation.

## FUTURE SCOPE
• Real-Time Interaction: Implement the system for real-time interactions, such as chatbots or virtual assistants, to provide more interactive experience.    
• Scalability: Expand the system to efficiently process and manage large-scale document collections.   
• Enhanced Search Capabilities: Integrate advanced semantic and hybrid search models for more accurate information retrieval.    
• Integration with Other Technologies: Combine RAG with technologies like reinforcement learning and computer vision for more dynamic and interactive responses.    
• Domain Specialization: Fine-tune the system for industry-specific knowledge, such as healthcare, legal, or finance.    

  
## DATASET:
We have used the NER annotated CVs dataset which contains 5029 entries and each entry has skills explicitly annotated.
https://www.kaggle.com/datasets/mehyarmlaweh/ner-annotated-cvs/data




