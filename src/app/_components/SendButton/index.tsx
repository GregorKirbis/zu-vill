import Link from "next/link";
import React from "react";

type SendButtonProps = {
  href: string;
  label: string;
  className?: string;
};

const SendButton: React.FC<SendButtonProps> = ({ href, label, className }) => {
  return (
    <Link href={href} className={className}>

        <i className="ti-shopping-cart"></i> {label}

    </Link>
  );
};

export default SendButton;
