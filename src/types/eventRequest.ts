export interface EventRequest {
    id: string;            // Unique identifier for the event request
    firstName: string;     // Requester's first name
    lastName: string;      // Requester's last name
    email: string;         // Requester's email address
    car: string;           // Details of the car involved in the request
    requestStatus: string; // Current status of the request (e.g., "Pending", "Approved", "Rejected")
  }
  