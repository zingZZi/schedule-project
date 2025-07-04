// 로그인 API 함수
export const loginAPI = async (email, password) => {
  try {
    // 실제 서버 요청을 시뮬레이션하기 위한 지연
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 이메일로 사용자 찾기
    const user = users.find((u) => u.email === email);

    if (!user) {
      throw new Error("존재하지 않는 이메일입니다.");
    }

    // 비밀번호 확인
    if (user.password !== password) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    // 로그인 성공 시 비밀번호 제외하고 반환
    const { password: _, ...userWithoutPassword } = user;

    return {
      success: true,
      message: "로그인 성공",
      user: userWithoutPassword,
      token: `fake-jwt-token-${user.userId}`, // 실제로는 JWT 토큰
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
      user: null,
      token: null,
    };
  }
};
