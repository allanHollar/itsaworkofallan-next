const AppFooterCopyright = () => {
  return (
    <div className="flex justify-center items-center font-general-regular text-center">
      <div
        className="mt-4 font-general-semibold text-center text-lg text-white dark:text-gray-200 leading-normal"
        style={{ textShadow: "rgba(0, 0, 0, 0.75) .05em .05em 2px" }}
      >
        &copy; {new Date().getFullYear()} It&apos;s a work of Allan! 🙂
      </div>
    </div>
  );
};

export default AppFooterCopyright;
