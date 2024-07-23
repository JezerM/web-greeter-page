# GreeterConfig

Provides greeter themes with a way to access values from the greeter's config
file located at `/etc/lightdm/web-greeter.yml`. The greeter will create an
instance of this class when it starts. The instance can be accessed with the
global variable: `greeter_config`.

## greeter_config.branding <ReadOnly />

- Type: `object`

Holds keys/values from the `branding` section of the config file.

```ts
type branding = {
  /**
   * Path to directory that contains background images for use in greeter themes.
   */
  background_images_dir: string;
  /**
   * Path to distro logo image for use in greeter themes.
   */
  logo: string;
  /**
   * Default user image/avatar.
   * This is used by greeter themes for users that have not configured a `.face` image.
   */
  user_image: string;
};
```

## greeter_config.greeter <ReadOnly />

- Type: `object`

Holds keys/values from the `greeter` section of the config file.

```ts
type greeter = {
  /**
   * Greeter theme debug mode.
   */
  debug_mode: boolean;
  /**
   * Provide an option to load a fallback theme when theme errors are detected.
   */
  detect_theme_errors: boolean;
  /**
   * Blank the screen after this many seconds of inactivity.
   */
  screensaver_timeout: number;
  /**
   * Don't allow themes to make remote HTTP requests.
   */
  secure_mode: boolean;
  /**
   * Language to use when displaying the time, or "".
   */
  time_language: boolean;
  /**
   * The name of the theme to be used by the greeter.
   */
  theme: string;
};
```

## greeter_config.features <ReadOnly />

- Type: `object`

Holds keys/values from the `features` section of the config file.

```ts
type features = {
  /**
   * Enable greeter and themes to get battery status.
   */
  battery: boolean;

  backlight: {
    /**
     * Enable greeter and themes to control display backlight.
     */
    enabled: boolean;
    /**
     * The amount to increase/decrease brightness by greeter.
     */
    value: number;
    /**
     * How many steps are needed to do the change
     */
    steps: number;
  };
};
```

## greeter_config.layouts <ReadOnly />

- Type: [`Array.<Layout>`](Layout)

Holds a list of preferred layouts from the `layouts` section of the config file.
