export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
  ipAddress?: string;
}

class ContactStorageService {
  private submissions: ContactSubmission[] = [];

  addSubmission(submission: Omit<ContactSubmission, 'id' | 'timestamp'>): ContactSubmission {
    const newSubmission: ContactSubmission = {
      ...submission,
      id: this.generateId(),
      timestamp: new Date(),
    };
    
    this.submissions.unshift(newSubmission); // Add to beginning for latest first
    
    // Keep only last 100 submissions to prevent memory issues
    if (this.submissions.length > 100) {
      this.submissions = this.submissions.slice(0, 100);
    }
    
    return newSubmission;
  }

  getAllSubmissions(): ContactSubmission[] {
    return [...this.submissions]; // Return copy to prevent modification
  }

  getSubmissionById(id: string): ContactSubmission | undefined {
    return this.submissions.find(sub => sub.id === id);
  }

  getSubmissionsCount(): number {
    return this.submissions.length;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

// Export singleton instance
export const contactStorage = new ContactStorageService();
