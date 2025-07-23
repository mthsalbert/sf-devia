import Sidebar from './Sidebar'
import Navbar from "./Navbar"
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/design-system/2.27.1/styles/salesforce-lightning-design-system.min.css"
        />
      </Head>
        <div className="slds-grid slds-size--1-of-1">
          <aside className="slds-size">
            {<Sidebar />}
          </aside>
          <div style={ { flexGrow: 1, flexBasis: '0' } } className="slds-size--1-of-1">
            <header className="">
                {/* <UserHeader /> */}
                <Navbar></Navbar>
            </header>
            <main className="">
              {children}
            </main>
          </div>
        </div>
    </>
  )
}
