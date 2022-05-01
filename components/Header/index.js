import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownActions from "../Dropdowns/DropdownActions";
import DropdownUser from "../Dropdowns/DropdownUser";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const [actionsMenu, setActionsMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  const { data: session, status } = useSession();

  const actionsMenuClick = () => {
    setActionsMenu(!actionsMenu);
    setUserMenu(false);
  };

  const userMenuClick = () => {
    setUserMenu(!userMenu);
    setActionsMenu(false);
  };

  const getUserName = () => {
    return session?.user?.email.split("@")[0];
  };

  return (
    <Container>
      <div className="content">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Imagem do usuário em forma circular"
            layout="fill"
          />
        </div>
        <nav>
          <ul className="navbar">
            <li>
              <Link href="/home" passHref>
                <a>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6482 7.86891L8.92415 0.175224C8.86853 0.119678 8.80248 0.0756107 8.72976 0.0455436C8.65703 0.0154765 8.57908 0 8.50035 0C8.42162 0 8.34367 0.0154765 8.27095 0.0455436C8.19823 0.0756107 8.13217 0.119678 8.07655 0.175224L0.35254 7.86891C0.127515 8.09322 0 8.3979 0 8.71567C0 9.3755 0.538187 9.91197 1.20014 9.91197H2.01398V15.4019C2.01398 15.7327 2.28214 16 2.61405 16H7.30021V11.813H9.40045V16H14.3867C14.7186 16 14.9867 15.7327 14.9867 15.4019V9.91197H15.8006C16.1194 9.91197 16.425 9.78673 16.65 9.56055C17.117 9.09325 17.117 8.33622 16.6482 7.86891Z"
                      fill="#157D7E"
                    />
                  </svg>
                  Home
                </a>
              </Link>
            </li>
            <li className="actionsMenu" onClick={actionsMenuClick}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.71577 12.424C1.45377 9.992 1.49377 6.18 3.84377 3.813C4.76477 2.8813 5.96233 2.27235 7.25777 2.077L7.18877 0C5.37019 0.219579 3.67946 1.0482 2.39177 2.351C-0.757234 5.521 -0.795234 10.64 2.26877 13.882L0.527766 15.634L6.03777 15.935L6.02277 10.101L3.71577 12.424ZM10.3628 0.465L10.3778 6.299L12.6848 3.977C14.9468 6.411 14.9068 10.223 12.5568 12.588C11.6359 13.5199 10.4383 14.1289 9.14277 14.324L9.21177 16.4C11.0303 16.1801 12.7212 15.352 14.0098 14.05C17.1578 10.878 17.1958 5.759 14.1318 2.519L15.8728 0.765L10.3628 0.465Z"
                  fill="#157D7E"
                />
              </svg>
              <span>
                Ações
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.06066"
                    y1="1"
                    x2="4.5"
                    y2="4.43934"
                    stroke="#235051"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="0.75"
                    y1="-0.75"
                    x2="5.61396"
                    y2="-0.75"
                    transform="matrix(-0.707107 0.707107 0.707107 0.707107 9 1)"
                    stroke="#235051"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {actionsMenu === true ? <DropdownActions /> : null}
            </li>
            <li>
              <Link href="/blog" passHref>
                <a>
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.89 1.19995L15.3 2.60995C15.69 2.99995 15.69 3.62995 15.3 4.01995L11 8.32995V17.9999H0V2.99995H10.67L12.47 1.19995C12.87 0.809948 13.5 0.799948 13.89 1.19995ZM8.23 9.67995L13.6 4.31995L12.18 2.89995L6.82 8.26995L6.11 10.3899L8.23 9.67995Z"
                      fill="#157D7E"
                    />
                  </svg>
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/chat" passHref>
                <a>
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 14C12.418 14 16 10.866 16 7C16 3.134 12.418 0 8 0C3.582 0 0 3.134 0 7C0 8.76 0.743 10.37 1.97 11.6C1.873 12.616 1.553 13.73 1.199 14.566C1.12 14.752 1.273 14.96 1.472 14.928C3.728 14.558 5.069 13.99 5.652 13.694C6.41791 13.8983 7.20732 14.0012 8 14Z"
                      fill="#157D7E"
                    />
                  </svg>
                  Chat
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a>
                  <svg
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="iconNotification"
                  >
                    <path
                      d="M16.0669 11.4331L14.375 9.74125V7.5C14.3731 5.95115 13.7969 4.45803 12.7579 3.30936C11.7189 2.1607 10.2909 1.43808 8.75 1.28125V0H7.5V1.28125C5.95911 1.43808 4.5311 2.1607 3.49211 3.30936C2.45311 4.45803 1.87694 5.95115 1.875 7.5V9.74125L0.183125 11.4331C0.0659066 11.5503 3.53984e-05 11.7093 0 11.875V13.75C0 13.9158 0.065848 14.0747 0.183058 14.1919C0.300268 14.3092 0.45924 14.375 0.625 14.375H5V15C5 15.8288 5.32924 16.6237 5.91529 17.2097C6.50134 17.7958 7.2962 18.125 8.125 18.125C8.9538 18.125 9.74866 17.7958 10.3347 17.2097C10.9208 16.6237 11.25 15.8288 11.25 15V14.375H15.625C15.7908 14.375 15.9497 14.3092 16.0669 14.1919C16.1842 14.0747 16.25 13.9158 16.25 13.75V11.875C16.25 11.7093 16.1841 11.5503 16.0669 11.4331ZM10 15C10 15.4973 9.80246 15.9742 9.45083 16.3258C9.09919 16.6775 8.62228 16.875 8.125 16.875C7.62772 16.875 7.15081 16.6775 6.79917 16.3258C6.44754 15.9742 6.25 15.4973 6.25 15V14.375H10V15Z"
                      fill="#157D7E"
                    />
                  </svg>
                  Notificações
                </a>
              </Link>
            </li>
            <li className="userOption" onClick={userMenuClick}>
              <div className="imgUser">
                <Image
                  src="/user.png"
                  alt="Imagem do usuário em forma circular"
                  layout="fill"
                />
              </div>
              <span>
                {getUserName()}
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1.06066"
                    y1="1"
                    x2="4.5"
                    y2="4.43934"
                    stroke="#235051"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="0.75"
                    y1="-0.75"
                    x2="5.61396"
                    y2="-0.75"
                    transform="matrix(-0.707107 0.707107 0.707107 0.707107 9 1)"
                    stroke="#235051"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {userMenu === true ? <DropdownUser /> : null}
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
