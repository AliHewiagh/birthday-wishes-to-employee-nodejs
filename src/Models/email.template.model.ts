class EmailTemplate {
    subject: string;
    content: string;
    constructor(subject: string, content: string) {
        this.subject = subject;
        this.content = content;
    }
}

export default EmailTemplate;
