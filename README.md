# Modern Prototype

### All `.xyz` are meant to be `<div class={xyz} >` unless stated otherwise.

## Navbar

```
-- nav.navbar
    -- .logo
        -- h1
    -- button.menuToggler
        -- <some sort of iconn>
    -- ul.links
        -- li
            -- a
        -- li
            -- a
```

## Navbar Fixed at Top

```
-- body.with-navbar
    -- nav.navbar.fixed
        ...rest
```

## Navbar with dropdowns

```
-- nav.navbar
    ...rest
        -- li.dropdown.entry
            -- span.dropdown-enter < Your Item text here >
            -- ul
                -- li
                    -- a
                -- li
                    -- a
                -- li.dropdown-back
                    -- span < close button text here >
```

### To use nested dropdowns, remove `.entry` from `li.dropdown.entry` and everything is same
