# Todos

## Current
- [x] Address the issue mentioned by the user after v14.
- [x] Redesign home page to be fully dark themed
- [x] Refactor home page and components to support both light and dark themes using Tailwind CSS dark: variants
- [x] Fix disappearing fonts in light theme by adjusting --muted-foreground color (first attempt)
- [x] Implement dynamic visitor and accounts analyzed counters
- [x] Fix React hydration error by deferring localStorage access to useEffect
- [x] Debug hydration error: Temporarily simplified ContactSection counter logic
- [x] Restore visitor counter in ContactSection with robust hydration safety
- [x] Fix light theme font visibility in PointsCalculator by applying explicit text colors (second attempt for inner content)
- [x] Fix CardHeader and Calculate button font visibility in PointsCalculator for light theme
- [x] Debug hydration error: Inlined styles for Calculate button (removed google-button class)
- [x] Improve load speed by lazy loading BadgesDisplay and ProfileCompletionCard in DashboardOverview (attempted, then reverted for debug)
- [x] Debug build error: Reverted ProfileCompletionCard to eager import (V33)
- [x] Debug build error: Reverted BadgesDisplay to eager import (V34)

## Future
- [ ] Implement a Badges Page to display earned achievements and in-progress badges
- [ ] Create a User Profile Page with editable settings and progress history
- [ ] Add a Resources Page with learning materials and challenge guides
- [ ] Implement authentication and user data persistence
