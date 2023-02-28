import tw from "tailwind-styled-components";

const LoadingContainer = tw.div`
  flex flex-col items-center justify-center h-screen
`;

const LoadingText = tw.span`
  text-lg font-bold mt-4
`;

const LoadingAnimation = tw.div`
  mt-8
  w-12 h-12 rounded-full 
  border-t-2 border-b-2 border-pink-500 
  animate-spin
`;

export const Loading = () => (
  <LoadingContainer>
    <LoadingAnimation />
    <LoadingText className="text-3xl font-thin tracking-wide">
      Loading
    </LoadingText>
  </LoadingContainer>
);
