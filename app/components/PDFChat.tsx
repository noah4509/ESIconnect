'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface Document {
  id: string;
  title: string;
  fileName: string;
}

interface PDFChatProps {
  documents: Document[];
}

const PDFChat = ({ documents }: PDFChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: 'Hello! I can help answer questions about your documents. What would you like to know?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(
    documents.length > 0 ? documents[0].id : null
  );
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || !selectedDocument) return;
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // In a real implementation, you would call your AI API here
    try {
      // Mock API call
      // const response = await fetch('/api/chat', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     question: input,
      //     documentId: selectedDocument
      //   }),
      // });
      
      // if (!response.ok) {
      //   throw new Error('Failed to get response');
      // }
      
      // const data = await response.json();
      
      // Mock AI response with a delay
      setTimeout(() => {
        const selectedDoc = documents.find(doc => doc.id === selectedDocument);
        const aiMessage: Message = {
          id: `ai-${Date.now()}`,
          content: generateMockResponse(input, selectedDoc?.title || ''),
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      console.error('Chat error:', err);
      
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content: 'Sorry, I encountered an error processing your request. Please try again.',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  // Generate a mock response based on the question and document
  const generateMockResponse = (question: string, documentTitle: string) => {
    const responses = [
      `Based on the document "${documentTitle}", I can tell you that this information relates to safety protocols for electrical work.`,
      `The document "${documentTitle}" mentions that this procedure should be reviewed annually by all team members.`,
      `According to "${documentTitle}", the proper safety equipment includes insulated gloves, safety glasses, and arc-flash protection.`,
      `The "${documentTitle}" states that all incidents must be reported within 24 hours to the safety coordinator.`,
      `I found in "${documentTitle}" that the certification requirements include 40 hours of classroom training and 2000 hours of supervised work.`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="bg-gray-dark/30 rounded-lg border border-gray-light/10 p-6 backdrop-blur-sm h-full flex flex-col">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-foreground mb-2">PDF Chat Assistant</h2>
        <p className="text-sm text-gray">Ask questions about your documents</p>
      </div>
      
      {documents.length > 0 ? (
        <>
          <div className="mb-4">
            <label className="block text-gray-light text-sm font-medium mb-2">
              Select Document
            </label>
            <select
              className="w-full px-3 py-2 bg-gray-dark/50 border border-gray-light/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={selectedDocument || ''}
              onChange={(e) => setSelectedDocument(e.target.value)}
            >
              {documents.map(doc => (
                <option key={doc.id} value={doc.id}>
                  {doc.title}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex-grow overflow-y-auto mb-4 bg-gray-dark/20 rounded-lg p-4">
            <div className="space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3/4 rounded-lg px-4 py-2 ${
                      message.isUser
                        ? 'bg-primary text-white'
                        : 'bg-gray-dark/70 text-gray-light'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-dark/70 text-gray-light max-w-3/4 rounded-lg px-4 py-2">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-light/50 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-light/50 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-light/50 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              className="flex-grow px-3 py-2 bg-gray-dark/50 border border-gray-light/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about this document..."
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim() || !selectedDocument}
              className={`px-4 py-2 rounded-md text-white font-medium ${
                isLoading || !input.trim() || !selectedDocument
                  ? 'bg-primary/50 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/80'
              }`}
            >
              Send
            </button>
          </form>
        </>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="mt-4 text-gray">No documents available</p>
            <p className="mt-2 text-sm text-gray">Upload documents to start chatting</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFChat; 