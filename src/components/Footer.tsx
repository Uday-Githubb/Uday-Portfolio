
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background/50 border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="text-3xl font-bold neon-text animate-glow">
            UDAY
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Transforming complex ideas into efficient, scalable solutions through innovative technology and creative problem-solving.
          </p>
          <div className="pt-6 border-t border-border/10">
            <p className="text-sm text-muted-foreground/80">
              © 2024 Uday. All Rights Reserved. Built with passion and cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
