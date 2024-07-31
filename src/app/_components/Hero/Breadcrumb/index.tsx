"use client"

import React from 'react';
import { usePathname } from 'next/navigation';

type PageProps = {
  title: string;
  url: string;
};

const Breadcrumb: React.FC<{ page?: PageProps }> = ({ page }) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  const href = '/' + pathSegments.slice(0, 0 + 1).join('/');
  const pageName = page.title

  return (
    <div className="breadcrumb-row">
      <ul className="list-inline">
        <li className="list-inline-item"><a href="/">Domov</a></li>
              <li className="list-inline-item">
                <a href={href}>{pageName}</a>
              </li>

      </ul>
    </div>
  );
};

export default Breadcrumb;
