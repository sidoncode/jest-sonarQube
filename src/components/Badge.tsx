// src/components/Badge.tsx
// ─── Chapter 8: Snapshot Testing ────────────────────────────────
type BadgeType = 'success' | 'error' | 'warning' | 'info';

interface Props {
  type: BadgeType;
  label: string;
}

const colorMap: Record<BadgeType, string> = {
  success: '#27AE60',
  error:   '#C0392B',
  warning: '#E67E22',
  info:    '#2E86AB',
};

const Badge = ({ type, label }: Props) => {
  return (
    <span
      data-testid="badge"
      style={{
        backgroundColor: colorMap[type],
        color: '#fff',
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '13px',
        fontWeight: 'bold',
      }}
    >
      {label}
    </span>
  );
};

export default Badge;
