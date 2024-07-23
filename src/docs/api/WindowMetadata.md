# WindowMetadata

Metadata that is sent to each window to handle more interesting multi-monitor
functionality / themes.

```ts
interface WindowMetadata {
  /**
   * Window id
   */
  id: number;
  /**
   * Whether the window is inside the primary screen or not
   */
  is_primary: boolean;
  /**
   * Window position in screen
   */
  position: {
    x: number;
    y: number;
  };
  /**
   * Window size
   */
  size: {
    width: number;
    height: number;
  };
  /**
   * The total real-estate across all screens,
   * this can be used to assist in, for example,
   * correctly positioning multi-monitor backgrounds.
   */
  overallBoundary: {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
  };
}
```
