import React from 'react';

export interface BasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  classes?: string[];
  variant?: 'primary' | 'secondary' | 'tertiary';
}
