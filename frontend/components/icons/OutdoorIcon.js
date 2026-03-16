const OutdoorIcon = ({ width = 20, height = 20, className, style }) => (
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
    <path d="M3 17l4-8 4 5 3-3 4 6H3z" />
    <circle cx="18" cy="6" r="2" />
  </svg>
);

export default OutdoorIcon;
