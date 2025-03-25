"use client";

export const Header = ({onClick}) => {
  return (
    <div className="ml-auto">
      <button onClick={onClick} className="cursor-pointer self-center m-2 px-2 w-fit py-1 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        log in
      </button>
    </div>
  );
};
