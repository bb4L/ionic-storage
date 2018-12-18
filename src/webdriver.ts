declare let chrome: any;
const webdriver: LocalForageDriver = {
        _driver: "webExtensionLocalStorage",
        _initStorage(): Promise<void> {
            return Promise.resolve();
        },
        clear(callback ?: (err: any) => void): Promise<void> {
            return new Promise((resolve, reject) => {
                chrome.storage.local.clear(res => {
                    if (callback) {
                        callback(res);
                    }
                    resolve(res);
                });
            });
        },
        getItem<T>(key: string, callback?: (err: any, value: T) => void): Promise<T> {
            return new Promise((resolve, reject) => {
                chrome.storage.local.get(key, res => {
                    if (callback) {
                        callback(null, res);
                    }
                    resolve(res);
                });
            });

        },
        iterate<T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U, callback?: (err: any, result: U) => void): Promise<U> {
            return new Promise((resolve, reject) => {
                chrome.storage.local.get(null, res => {
                    res.forEach((key, i) => iteratee(res[key], key, i));
                    if (callback) {
                        callback(null, res);
                    }
                    resolve(res);
                });
            });

        },

        key(keyIndex: number, callback?: (err: any, key: string) => void): Promise<string> {
            return new Promise((resolve, reject) => {
                chrome.storage.local.get(null, res => {
                    let sol:string = res.keys()[keyIndex];
                    if (callback) {
                        callback(null, sol);
                    }
                    resolve(res);
                });
            });
        },
        keys(callback ?: (err: any, keys: string[]) => void): Promise<string[]> {
            return new Promise(
                (resolve, reject) => {
                    chrome.storage.local.get(null, res => {
                        if (callback) {
                            callback(null, res);
                        }
                        resolve(res);
                    });
                }
            );
        },
        length(callback ?: (err: any, numberOfKeys: number) => void): Promise<number> {
            return new Promise(
                (resolve, reject) => {
                    chrome.storage.local.get(null, res => {
                        if (callback) {
                            callback(null, res.keys.length);
                        }
                        resolve(res.keys.length);
                    });
                }
            );
        },
        removeItem(key: string, callback ?: (err: any) => void): Promise<void> {
            return new Promise(
                (resolve, reject) => {
                    chrome.storage.local.remove(key, res => {
                        if (callback) {
                            callback(res);
                        }
                        resolve(res);
                    });
                }
            );
        },
        setItem<T>(key: string, value: T, callback?: (err: any, value: T) => void): Promise<T> {
            return new Promise(
                (resolve, reject) => {
                    chrome.storage.local.set({key: value}, res => {
                        if (callback) {
                            callback(null, res);
                        }
                        resolve(res);
                    });
                }
            );
        }
}
;

export default webdriver;
// add the driver to localForage.
// localforage.defineDriver(myCustomDriver);