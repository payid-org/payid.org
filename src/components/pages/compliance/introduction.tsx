import React from 'react'

import Wave from '../../common/wave'

const Introduction: React.FC = () => {
  return (
    <Wave spacing="sm">
      <div className="px-0 pt-16 sm:pt-40 sm:flex sm:px-29">
        <div className="sm:flex sm:flex-col sm:mr-12">
          <h1 className="mb-10 text-3xl font-bold sm:mb-16 sm:text-h1 sm:leading-tighter">
            Travel Rule Compliance
          </h1>
          <div className="sm:text-xl">
            PayID is built to be a simple and flexible extension of existing
            payment networks, making it best-in-class in compliance messaging —
            such as Travel Rule and AML.
          </div>
        </div>
        <div>
          <ul className="sm:list-disc sm:list-outside">
            <li className="mt-8 sm:mt-0">
              Travel rule is a regulatory requirement for money services to
              exchange and retain information on senders and recievers of
              transactions.
            </li>
            <li className="mt-8">
              Various regulators have signaled that many crypto applications -
              VASPs (&quot;Virtual Asset Service Providers&quot;) - will need to
              comply with Travel Rule in the near future.
            </li>
            <li className="mt-8">
              This is a very difficult problem using the old transaction model
              of sending to on ledger addresses, but PayID make Travel Rule
              compliance easy.
            </li>
          </ul>
          <div className="mt-8">
            <a
              href="https://google.com"
              className="text-orange-500 focus:underline hover:underline"
            >
              Learn more
            </a>{' '}
            about Travel Rule in crypto
          </div>
        </div>
      </div>
    </Wave>
  )
}

export default Introduction
