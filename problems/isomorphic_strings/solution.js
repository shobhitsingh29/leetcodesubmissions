var isIsomorphic = function(s, t) {
    const dict = {}
    for (let i = 0; i < s.length; i++) {
        if (!dict[s[i]] && !Object.values(dict).includes(t[i])) {
            dict[s[i]] = t[i]
        } else if (dict[s[i]] !== t[i]) {
            return false;
        }
    }
    return true;
};