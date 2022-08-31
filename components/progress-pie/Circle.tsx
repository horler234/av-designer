interface ICircle {
  color: string;
  percent?: number;
}

export const Circle = ({ color, percent }: ICircle) => {
  const r = 17;
  const circ = 2 * Math.PI * r;

  const strokePct = percent ? ((100 - percent) * circ) / 100 : 0;
  return (
    <circle
      r={r}
      cx={180}
      cy={19}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
      strokeWidth={3}
      strokeDasharray={circ}
      strokeDashoffset={strokePct}
    />
  );
};
