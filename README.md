# Hearth - physical store theme (Home, Kitchen & Outdoor)

Hearth is a Shopify Online Store 2.0 theme for a **physical shop that also sells online**. It is built on the
Minimog 5.6.0 engine (product cards, filters, slide cart, quick view, wishlist, compare) and re-designed around
a bricks-and-mortar retailer: trust, service, Click & Collect and "come and see it in store".

Every page shares one identity - **deep ink navy + ember orange + warm cream**, condensed headings, rounded
cards - and **everything is editable in Customize theme** (no code needed).

---------------------------------------------------------------------------------------------------

## 1. Install

**Upload a zip:** Online Store > Themes > Add theme > Upload zip file. (Zip only the theme folders:
`assets config layout locales sections snippets templates`.)

**Or connect the GitHub repo:** Online Store > Themes > Add theme > Connect from GitHub.

## 2. First-time setup checklist (about 15 minutes)

1. **Import the products** - `store-setup/products_categorised.csv` is your original export with every
   product given a **Type** (`Kitchen`, `Outdoor` or `Home`) and a matching tag. Import it (overwrite existing).
   One product, the *DJI Osmo Pocket 3*, did not fit a category cleanly and was put in `Outdoor` - change it if you like.
2. **Create 3 collections** (Products > Collections > Create collection > *Automated*):

   | Title          | Handle (URL)  | Condition                       |
   |----------------|---------------|---------------------------------|
   | Kitchen        | `kitchen`     | Product type is equal to Kitchen |
   | Outdoor & BBQ  | `outdoor`     | Product type is equal to Outdoor |
   | Home           | `home`        | Product type is equal to Home    |

   Add a collection image to each (the category tiles on the home page use it).
3. **Create your menus** (Content > Menus): `main-menu` (header) and `footer` (footer column "Help & info").
   Optional: a menu for the small legal links bar - pick it in *Footer > Legal links menu*.
4. **Create the pages** (Online Store > Pages) and choose the matching **template** on each:

   | Page title          | URL handle        | Theme template        |
   |---------------------|-------------------|-----------------------|
   | About us            | `about-us`        | `page.about-us`       |
   | Contact             | `contact`         | `page.contact`        |
   | FAQs                | `faqs`            | `page.faqs`           |
   | Find a store        | `find-a-store`    | `page.find-a-store`   |
   | Delivery & returns  | `delivery`        | `page.delivery`       |
   | Click & Collect     | `click-collect`   | `page.click-collect`  |
   | Wishlist            | `wishlist`        | `page.wishlist`       |
   | Product compare     | `product-compare` | `page.product-compare`|

   (Those handles are what the demo buttons and links already point to. Change a link in the editor if you use a different handle.)
5. **Fill in your store details once:** Customize > Theme settings > **Store details** and **Store contact**
   (address, phone, email, opening hours, directions link, Click & Collect text). The footer, product pages,
   cart, contact page, "Visit our store" sections and the header bar all read from here.
6. **Upload your logo:** Customize > Header > Logo. **Add images** to the hero, tiles, team, etc.
7. **Local pickup:** Settings > Shipping and delivery > Local pickup - turn it on for your shop location so the
   product page shows the live "Pickup available at..." message.
8. **Checkout branding** - see section 5 (checkout is edited in Shopify admin, not in the theme).
9. Read through the placeholder copy (prices like "£150", the 14-day returns wording, years in business, team
   names) and **replace it with your real policies and numbers**.

## 3. What is editable (Customize theme)

### Theme settings (the cog icon)
- **Colors** - colour schemes (default, cream, dark, ember, sage, footer, badges) and the **Store accent colour**
- **Typography** - heading/body fonts, sizes, button style
- **Store details** - name, tagline, address, map text, directions link, opening hours, Click & Collect text
- **Cart & slide cart messaging** - free-delivery progress bar (threshold + wording), reassurance ticks, help text
- **Cart settings**, **Product card**, **Search**, **Social**, **Cookie banner**, **Currency**, etc.

### New store sections (Add section)
| Section | Use it for |
|---|---|
| Home hero | Big opening banner with headline, buttons, tick points, floating Click & Collect card |
| Trust badges | Delivery / Click & Collect / price match / expert advice strip (bar, cards or minimal) |
| Category tiles | Kitchen / Outdoor / Home shop-by-category tiles |
| Promo tiles | Mosaic of 2-6 offer tiles |
| Why choose us | Image + reasons list + experience badge |
| Our story | About-us story with ticks and signature |
| Numbers & stats | Years, brands, customers - counts up on scroll |
| Services | Delivery, installation, recycling, warranty cards |
| Step by step | Click & Collect (or any process) in numbered steps |
| Visit our store | Address, phone, hours (today highlighted), Click & Collect note, map or photo |
| Brands we stock | Wordmark or logo grid |
| Meet the team | Staff cards |
| Timeline | Your story milestones |
| FAQ | Accordion questions with Google FAQ markup |
| Contact cards | Phone / email / address / hours cards (auto-filled from Store details) |
| Page banner | Title banner with breadcrumb for any page |
| Call to action banner | "Talk to a real person" band with buttons and phone |
| Footer | Large pro footer: perks strip, about, menus, store hours, newsletter, payments |

All of the existing theme sections (featured collection, testimonials, newsletter, slideshow, video, lookbook,
custom content, etc.) still work and are restyled by the same colour schemes.

### Product page
Product page > Product information has new blocks: **Store perk** (icon + text), **Click & Collect card**
and **Need help? box**, alongside price, variants, buy buttons, delivery date, compare, collapsible tabs and
complementary products. Below the product: service promises, details tabs, why buy from us, see-it-in-store map,
product FAQs, reviews, recommendations, recently viewed and a CTA.

### Cart + slide cart
Slide cart and cart page share the free-delivery progress bar, reassurance ticks and help line (Theme settings >
Cart & slide cart messaging). The cart page also has editable reassurance / help blocks under the cart.

## 4. Template map

| Page | Template |
|---|---|
| Home | `index.json` |
| Collection | `collection.json` (banner, trust bar, filters + grid, services, CTA) |
| All collections | `list-collections.json` |
| Product | `product.json` |
| Cart | `cart.json` |
| Search / 404 / Blog / Article / Account / Password | `search`, `404`, `blog`, `article`, `customers/*`, `password` |
| Content pages | `page.*.json` (see the table in section 2) |

## 5. Checkout

Shopify controls the checkout pages, so they are **branded in the admin, not in theme code**:
Settings > Checkout > **Customize** (checkout editor) > Branding. Suggested values to match this theme:

- Primary / button colour `#10202F`, accent `#D9531E`, background `#FFFFFF`, secondary background `#F5F0E6`
- Heading font: *Roboto Condensed* (bold) - body font: *Roboto*
- Upload the same logo as the header

## 6. Notes

- Fonts: Roboto Condensed (headings) and Roboto (body) from the Shopify font library - change in Typography.
- The `store-setup/` folder and this README are not part of the theme; they are listed in `.shopifyignore`.
- The slide cart uses Shopify's cart API; the free-delivery bar compares against your **store currency**
  (it does not convert for other markets).
