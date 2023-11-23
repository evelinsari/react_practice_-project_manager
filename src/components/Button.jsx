export default function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-teal-500 hover:bg-teal-600 hover:text-teal-100" {...props}>
      {children}
    </button>
  );
}
