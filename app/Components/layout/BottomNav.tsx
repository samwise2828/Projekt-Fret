const navigationItems = [
  {
    label: "Profile",
    icon: "◯",
  },
  {
    label: "World",
    icon: "◆",
  },
  {
    label: "Songs",
    icon: "♪",
  },
  {
    label: "Skills",
    icon: "♣",
  },
  {
    label: "Settings",
    icon: "⚙",
  },
];

export default function BottomNav() {
  return (
    <nav className="bottomNav" aria-label="Main navigation">
      {navigationItems.map((item) => {
        const isActive = item.label === "World";

        return (
          <button
            className={`bottomNavItem ${
              isActive ? "bottomNavItemActive" : ""
            }`}
            key={item.label}
            type="button"
          >
            <span className="bottomNavIcon" aria-hidden="true">
              {item.icon}
            </span>

            <span className="bottomNavLabel">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}