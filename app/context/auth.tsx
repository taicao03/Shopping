// AuthProvider.js
"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import endpoint from "@/app/network";
const AuthContext = createContext({});

export default function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedUserData = localStorage.getItem("userData");
  const userData = JSON.parse(storedUserData || "");
  const [user, setUser] = useState(userData || null);

  const login = async (bodyData: any) => {
    // Gửi yêu cầu đăng nhập và nhận token từ API

    try {
      const response = await axios.post(`${endpoint.login}`, bodyData);
      const accessToken = response.data.accessToken;

      // Lưu token trong localStorage
      localStorage.setItem("token", accessToken);
      localStorage.setItem("userData", JSON.stringify(response?.data?.others));

      // Kiểm tra và đăng nhập tự động sau khi làm mới trang

      // Lấy thông tin người dùng từ API sử dụng token
      // const userResponse = await axios.get(
      //   `${endpoint.user}/${response?.data?.others?._id}`,
      //   {
      //     headers: { token: `Bearer ${accessToken}` },
      //   }
      // );

      // const userData = userResponse.data;

      // Lưu thông tin người dùng vào trạng thái
      // setUser(userData);
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
    }
  };

  // const logout = () => {
  //   // Xóa token từ localStorage và đặt user thành null
  //   localStorage.removeItem("token");
  //   setUser(null);
  // };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
