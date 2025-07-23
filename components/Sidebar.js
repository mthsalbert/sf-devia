import { useRouter } from 'next/router';
import styles from './Sidebar.module.css'

export default function Navbar() {
    const router = useRouter();

    return (
        <div className={`${styles.sidebar} slds-p-around--small`}>
            <button className="slds-button">
                <div className="slds-icon_container">
                    <svg className="slds-icon slds-icon-text-default slds-icon_x-small" aria-hidden="true" viewBox="0 0 512 512" width="24" height="24">
                        <path d="M115 170H35c-8 0-15 7-15 15v255a40 40 0 0 0 40 40h55c8 0 15-7 15-15V185c0-8-7-15-15-15zm370 0H185c-8 0-15 7-15 15v280c0 8 7 15 15 15h275a40 40 0 0 0 40-40V185c0-8-7-15-15-15zM460 40H60a40 40 0 0 0-40 40v35c0 8 7 15 15 15h450c8 0 15-7 15-15V80a40 40 0 0 0-40-40z" />
                    </svg>
                </div>
            </button>
            <ul className={`${styles['container-menu-list']}  slds-m-top--small`}>
                <li>
                    <a className="slds-button" href="/organization/list">
                        <svg className="slds-button__icon slds-button__icon_left slds-icon_small" aria-hidden="true" height="24" width="24" viewBox="0 0 520 520">
                            <path
                                d="M217 119c17-17 40-28 66-28 34 0 64 19 80 47 14-6 29-10 45-10 62 0 112 50 112 112s-50 112-112 112c-8 0-15-1-22-2a82.4 82.4 0 0 1-72 42c-13 0-25-3-36-8a92.7 92.7 0 0 1-86 56c-40 0-75-25-88-61-6 1-12 2-18 2a87 87 0 0 1-44-162 100.5 100.5 0 0 1 93-140c35 1 64 16 82 40" />
                        </svg>
                        <span>Organizações</span>
                    </a>
                </li>
                <li>
                    <a className="slds-button" href="/deploy/list">
                        <svg className="slds-button__icon slds-button__icon_left slds-icon_small" aria-hidden="true" height="24" width="24" viewBox="0 0 520 520">
                            <path
                                d="M386 204c-10-65-67-115-135-115-76 0-137 61-137 137 0 3 0 7 1 10-50 4-89 46-89 96 0 54 43 97 97 97h115l-81-81c-4-4-4-9 0-13l13-13c4-4 9-4 13 0l35 35c4 4 11 1 11-4V218c0-4 5-9 10-9h19c5 0 9 4 9 9v134c0 6 8 8 11 4l35-35c4-4 9-4 13 0l13 13c4 4 4 9 0 13l-79 82h123c61-1 110-51 110-113 1-61-47-110-107-112z" />
                        </svg>
                        <span>Metadados</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
