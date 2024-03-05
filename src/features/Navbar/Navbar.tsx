import React, { FC, useState, useEffect, useRef } from "react"; // Импорт React из пакета react

import { Container } from "../../shared/Container/Container";
import { List } from "../../shared/List/List";
import { ListItem } from "../../shared/ListItem/ListItem";
import { Nav } from "../../shared/Nav/Nav";
import { Wrapper } from "../../shared/Wrapper/Wrapper";
import {
  ReactComponent as Logo,
  src as logSrc,
} from "../../assets/svg/logo.svg";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { Circle } from "../../shared/Circle/Circle";
import { Tooltip } from "../../shared/Tootip/Tooltip";
import { Avatar } from "../../shared/Avatar/Avatar";
import { ReactComponent as DefaultAvatar } from "../../assets/svg/avatar-default-symbolic-svgrepo-com.svg";
import { logout } from "../../app/redux/action/AuthActions";
import { auth } from "../../fire";
import { useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const [tooltipActive, setTooltipActive] = useState<boolean>(false);
  const { loading, error } = useAppSelector(state => state.auth);

  const user = auth.currentUser?.providerData[0];

  const root = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout(auth));
    navigate("/register");
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) =>
      (root.current && root.current.contains(e.target as Node)) ||
      setTooltipActive(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <Wrapper $nav>
      <Container>
        <Nav>
          <Logo onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
          <List>
            <ListItem>nav item</ListItem>
            <ListItem>nav item</ListItem>
            <ListItem>nav item</ListItem>
            <ListItem>
              <Tooltip
                ref={root}
                onClick={() => setTooltipActive(!tooltipActive)}
                $show={tooltipActive}>
                {user?.photoURL ? (
                  <Avatar src={user.photoURL} />
                ) : (
                  <DefaultAvatar />
                )}
                <span>
                  {user && (
                    <div>
                      <p>{user?.displayName}</p>
                      <p>{user?.email}</p>
                      <p>{user?.phoneNumber}</p>
                      <button onClick={() => navigate("/profile")}>
                        profile
                      </button>
                      <button onClick={handleLogout}>logout</button>
                    </div>
                  )}
                </span>
              </Tooltip>
            </ListItem>
          </List>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
