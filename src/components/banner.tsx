import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import banner1 from "../assets/images/banner1.webp";
import banner2 from "../assets/images/banner2.webp";
import banner3 from "../assets/images/banner3.webp";

const images = [banner1, banner2, banner3];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSlideIn(true);
      }, 200);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const urls = [
    "https://sejonghonbab.simple.ink/", // 혼밥 이용방법
    "https://sejongbuddy.simple.ink/", // 세종버디 이용방법
    "https://sejongpeer.simple.ink/", // FAQ
  ];

  // 이미지 클릭 이벤트 핸들러, 인덱스에 해당하는 URL로 이동
  const onImageClick = () => {
    const url = urls[currentImageIndex];
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <SlideImage
      src={images[currentImageIndex]}
      slideIn={slideIn}
      alt={`Banner ${currentImageIndex + 1}`}
      onClick={onImageClick} // onClick 이벤트 핸들러가 index 대신 currentImageIndex를 사용
    />
  );
};

export default Banner;

// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// 타입
interface SlideImageProps {
  slideIn: boolean;
}

const SlideImage = styled.img<SlideImageProps>`
  width: 100%;
  height: 112px;
  border-radius: 8px;
  object-fit: cover;
  animation: ${({ slideIn }) => (slideIn ? fadeIn : fadeOut)} 0.5s ease-in-out;
  cursor: pointer; // 커서를 포인터로 변경
  margin-top: 16px
`;
