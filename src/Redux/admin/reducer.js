import {
    GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS,
    GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,
    UPDATE_USERS_ERROR, UPDATE_USERS_LOADING, UPDATE_USERS_SUCCESS,
    DELETE_USERS_ERROR, DELETE_USERS_LOADING, DELETE_USERS_SUCCESS,
    ADD_PRODUCTS_ERROR, ADD_PRODUCTS_LOADING, ADD_PRODUCTS_SUCCESS,
    UPDATE_PRODUCTS_ERROR, UPDATE_PRODUCTS_LOADING, UPDATE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR, DELETE_PRODUCTS_LOADING, DELETE_PRODUCTS_SUCCESS,
    GET_ADMIN_ERROR, GET_ADMIN_LOADING, GET_ADMIN_SUCCESS,
    GET_CART_ERROR, GET_CART_LOADING, GET_CART_SUCCESS,
    UPDATE_CART_ERROR, UPDATE_CART_LOADING, UPDATE_CART_SUCCESS,
    GET_WISHLIST_ERROR, GET_WISHLIST_LOADING, GET_WISHLIST_SUCCESS,
    DELETE_CART_ERROR, DELETE_CART_LOADING, DELETE_CART_SUCCESS,
    DELETE_WISHLIST_LOADING, DELETE_WISHLIST_ERROR, DELETE_WISHLIST_SUCCESS,
    GET_CHECKOUT_LOADING, GET_CHECKOUT_ERROR, GET_CHECKOUT_SUCCESS
} from './action.type'

const initialState = {
    usersListLoading: false,
    usersListError: false,
    usersList: [],
    updateusersLoading: false,
    updateusersError: false,
    updateusers: false,
    deleteusersLoading: false,
    deleteusersError: false,
    deleteusers: false,
    adminListLoading: false,
    adminListError: false,
    adminList: [],
    productsListLoading: false,
    productsListError: false,
    productsList: [],
    addProductLoading: false,
    addProductError: false,
    addProductResult: '',
    updateProductLoading: false,
    updateProductError: false,
    updateProductResult: false,
    deleteProductLoading: false,
    deleteProductError: false,
    deleteProductResult: false,
    cartListLoading: false,
    cartListError: false,
    cartList: [],
    updateCartLoading: false,
    updateCartError: false,
    updateCartResult: false,
    deleteCartLoading: false,
    deleteCartError: false,
    deleteCartResult: false,
    wishListLoading: false,
    wishListError: false,
    wishList: [],
    deleteWishlistLoading: false,
    deleteWishlistError: false,
    deleteWishlistResult: false,
    checkoutList: [],
    checkoutLoading: false,
    checkoutError: false
}

export const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS_LOADING: {
            return {
                ...state,
                usersListLoading: true,
                usersListError: false,
            }
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                usersListLoading: false,
                usersListError: true,
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                usersListLoading: false,
                usersList: payload
            }
        }
        case GET_PRODUCTS_ERROR: {
            return {
                ...state,
                productsListLoading: false,
                productsListError: true
            }
        }
        case GET_PRODUCTS_LOADING: {
            return {
                ...state,
                productsListLoading: true,
                productsListError: false
            }
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                productsListLoading: false,
                productsList: payload
            }
        }
        case ADD_PRODUCTS_ERROR: {
            return {
                ...state,
                addProductLoading: false,
                addProductError: true,
            }
        }
        case ADD_PRODUCTS_LOADING: {
            return {
                ...state,
                addProductLoading: true,
                addProductError: false,
            }
        }
        case ADD_PRODUCTS_SUCCESS: {
            return {
                ...state,
                addProductLoading: false,
                addProductResult: payload
            }
        }
        case UPDATE_PRODUCTS_ERROR: {
            return {
                ...state,
                updateProductLoading: false,
                updateProductError: true
            }
        }
        case UPDATE_PRODUCTS_LOADING: {
            return {
                ...state,
                updateProductLoading: true,
                updateProductError: false
            }
        }
        case UPDATE_PRODUCTS_SUCCESS: {
            return {
                ...state,
                updateProductLoading: false,
                updateProductResult: payload
            }
        }
        case DELETE_PRODUCTS_ERROR: {
            return {
                ...state,
                deleteProductLoading: false,
                deleteProductError: true
            }
        }
        case DELETE_PRODUCTS_LOADING: {
            return {
                ...state,
                deleteProductLoading: true,
                deleteProductError: false
            }
        }
        case DELETE_PRODUCTS_SUCCESS: {
            return {
                ...state,
                deleteProductLoading: false,
                deleteProductError: false,
                deleteProductResult: payload
            }
        }
        case GET_ADMIN_ERROR: {
            return {
                ...state,
                adminListLoading: false,
                adminListError: true
            }
        }
        case GET_ADMIN_LOADING: {
            return {
                ...state,
                adminListLoading: true,
                adminListError: false
            }
        }
        case GET_ADMIN_SUCCESS: {
            return {
                ...state,
                adminListLoading: false,
                adminListError: true,
                adminList: payload
            }
        }
        case UPDATE_USERS_ERROR: {
            return {
                ...state,
                updateusersLoading: false,
                updateusersError: true,
            }
        }
        case UPDATE_USERS_LOADING: {
            return {
                ...state,
                updateusersLoading: true,
                updateusersError: false
            }
        }
        case UPDATE_USERS_SUCCESS: {
            return {
                ...state,
                updateusersLoading: false,
                updateusersError: false,
                updateusers: payload
            }
        }
        case DELETE_USERS_ERROR: {
            return {
                ...state,
                deleteusersLoading: false,
                deleteusersError: true
            }
        }
        case DELETE_USERS_LOADING: {
            return {
                ...state,
                deleteusersLoading: true,
                deleteusersError: false
            }
        }
        case DELETE_USERS_SUCCESS: {
            return {
                ...state,
                deleteusersLoading: false,
                deleteusersError: false,
                deleteusers: payload
            }
        }
        case GET_CART_ERROR: {
            return {
                ...state,
                cartListLoading: false,
                cartListError: true
            }
        }
        case GET_CART_LOADING: {
            return {
                ...state,
                cartListLoading: true,
                cartListError: false
            }
        }
        case GET_CART_SUCCESS: {
            return {
                ...state,
                cartListLoading: false,
                cartListError: false,
                cartList: payload
            }
        }
        case GET_WISHLIST_ERROR: {
            return {
                ...state,
                wishListLoading: false,
                wishListError: true
            }
        }
        case GET_WISHLIST_LOADING: {
            return {
                ...state,
                wishListLoading: true,
                wishListError: false
            }
        }
        case GET_WISHLIST_SUCCESS: {
            return {
                ...state,
                wishListLoading: false,
                wishListError: false,
                wishList: payload
            }
        }
        case UPDATE_CART_ERROR: {
            return {
                ...state,
                updateCartLoading: false,
                updateCartError: true
            }
        }
        case UPDATE_CART_LOADING: {
            return {
                ...state,
                updateCartLoading: true,
                updateCartError: false
            }
        }
        case UPDATE_CART_SUCCESS: {
            return {
                ...state,
                updateCartLoading: false,
                updateCartError: false,
                updateCartResult: payload,
            }
        }
        case DELETE_CART_ERROR: {
            return {
                ...state,
                deleteCartLoading: false,
                deleteCartError: true
            }
        }
        case DELETE_CART_LOADING: {
            return {
                ...state,
                deleteCartLoading: true,
                deleteCartError: false
            }
        }
        case DELETE_CART_SUCCESS: {
            return {
                ...state,
                deleteCartLoading: false,
                deleteCartError: false,
                deleteCartResult: payload
            }
        }
        case DELETE_WISHLIST_LOADING: {
            return {
                ...state,
                deleteWishlistLoading: true,
                deleteWishlistError: false
            }
        }
        case DELETE_WISHLIST_ERROR: {
            return {
                ...state,
                deleteWishlistLoading: false,
                deleteWishlistError: true
            }
        }
        case DELETE_WISHLIST_SUCCESS: {
            return {
                ...state,
                deleteWishlistLoading: false,
                deleteWishlistError: false,
                deleteWishlistResult: payload
            }
        }

        case GET_CHECKOUT_LOADING: {
            return {
                ...state,
                checkoutLoading: true,
                checkoutError: false
            }
        }
        case GET_CHECKOUT_ERROR: {
            return {
                ...state,
                checkoutLoading: false,
                checkoutError: true
            }
        }
        case GET_CHECKOUT_SUCCESS: {
            return {
                ...state,
                checkoutList: payload,
                checkoutLoading: false,
                checkoutError: false
            }
        }
        default: {
            return state
        }
    }
}