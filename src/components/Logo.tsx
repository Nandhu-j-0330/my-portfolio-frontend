export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* your batman path here */}
      <path d="M12 2C8 2 4 4 2 8c2 6 6 10 10 12 4-2 8-6 10-12-2-4-6-6-10-6z" />
    </svg>
  );
}
