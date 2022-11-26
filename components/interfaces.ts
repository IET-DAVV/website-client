import React from 'react';

export interface IBasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classes?: string[];
  variant?: 'primary' | 'secondary' | 'tertiary';
}
