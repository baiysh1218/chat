import Chat from "../../pages/Chat/Chat";
import Auth from "../../features/Auth/Auth";
import { IPUBLICROUTE } from "./model";

export const PUBLIC_ROUTES: IPUBLICROUTE[] = [
  { link: "/register", component: Auth, id: 1 },
];

export const PRIVATE_ROUTES: IPUBLICROUTE[] = [
  { link: "/chat", component: Chat, id: 1 },
];
