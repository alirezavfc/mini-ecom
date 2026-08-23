# Home (Page Component)
|
|------ Header
|        |
|        |___ NavBar
|                |------ NavigationLinks
|                |------ SearchBox
|                |____ ShoppingCart
|------ Aside
|       |
|       |------ SearchBox
|       |___ FilteringCategory
|       |____ FilteringManufacture
|
|------ Main
|       |
|       |____ ProductGrid
|               |------ ProductCard
|               |------ ProductCard
|               |------ ....
|
|____ Footer


# ProductDetailPage (Page Component)
|
|------ Header (Same)
|------ Main
|       |
|       |____ ProductDetailContainer
|               |------ ProductImageSection
|               |
|               |------ ProductInfo
|               |       |------ ProductName
|               |       |------ ProductDescription
|               |       |____ ProductSpecs
|               |
|               |____ ProductAction
|                       |
|                       |------ ProductPrice
|                       |____ ProductAddToCartButton
|
|____ Footer (Same)

# CartPage (Page Component)
|
|------ Header (Same)
|------ Main
|       |
|       |____ CartContainer
|               |------ SelectedProductsList
|               |        |
|               |        |----CartItem
|               |        |      |------ ItemImage
|               |        |      |------ ItemInfo
|               |        |      |------ QuantityController
|               |        |
|               |        |----CartItem
|               |        |      |------ ItemImage
|               |        |      |------ ItemInfo
|               |        |      |------ QuantityController
|               |        |      
|               |        |____CartItem ....
|               |              
|               |
|               |____ SelectedProductsSummary
|                       |
|                       |------ AllSelected
|                       |------ AllPrice
|                       |____ CheckoutButton
|
|____ Footer (Same)


# State Management Flow
* When multiple components need to access the same state, lift that state up to their closest common ancestor.

Global State (Cart): Managed using React Context API (CartContext).

Location: CartProvider will wrap the root App component.

Consumers: Accessed by Header (badge), CartPage (display/update items), and ProductDetailPage (add action).