import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, phone, message
}) => (
  <div>
    <b>Message Received from {name} - {email}!</b>
    <p>Phone: {phone}</p>
    <p>Message: {message}</p>
  </div>
);
