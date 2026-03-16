const BarIcon = ({ width = 20, height = 20, className, style }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M8 22V12M16 22V12M5 8l1-6h12l1 6H5z" />
    <path d="M5 8c0 2 1.5 4 7 4s7-2 7-4" />
  </svg>
);

export default BarIcon;
