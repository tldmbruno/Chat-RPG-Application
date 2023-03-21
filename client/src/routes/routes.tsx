import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import {
  ChatRoom,
  CreateGame,
  Error404,
  Feed,
  Home,
  Publication,
  Register,
} from '@pages';
import { useUser } from '@providers';

interface ChildrenTypes {
  children: React.ReactElement;
}

const Private = ({ children }: ChildrenTypes) => {
  const { token } = useUser();
  if (!token) {
    return <Navigate to={'/home'} />;
  }
  return children;
};

const Public = ({ children }: ChildrenTypes) => {
  const { token } = useUser();
  if (token) {
    return <Navigate to={'/feed'} />;
  }
  return children;
};

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route
        path="/home"
        element={
          <Public>
            <Home />
          </Public>
        }
      />

      <Route
        path="/register"
        element={
          <Public>
            <Register />
          </Public>
        }
      />

      <Route
        path="/feed"
        element={
          <Private>
            <Feed />
          </Private>
        }
      />

      <Route
        path="/create-game"
        element={
          <Private>
            <CreateGame />
          </Private>
        }
      />
      <Route
        path="/chat-room/:id"
        element={
          <Private>
            <ChatRoom />
          </Private>
        }
      />
      <Route
        path="/publication"
        element={
          <Private>
            <Publication />
          </Private>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
