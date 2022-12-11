export default {
    getCurrentJWT() {
        const token = window.localStorage.getItem('auth_token.aad');

        if (token == null || token == undefined) {
            return null;
        }

        return String(token);
    },
}
