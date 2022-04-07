import dotenv from 'dotenv';

dotenv.config();
export const PORT: number = Number(process.env.PORT) as number;
export const RAVEN_SERVER_URL: string = process.env.RAVEN_SERVER_URL as string;
export const RAVEN_DB_NAME_PLATFORM: string = process.env.RAVEN_DB_NAME_PLATFORM as string;
export const RAVEN_PASSWORD: string = process.env.RAVEN_PASSWORD as string;
export const RAVEN_CERT: string = "-----BEGIN CERTIFICATE-----\nMIIFAzCCAuugAwIBAgIUYr8bwxBe8XXbYzz85CMWAbfHvZcwDQYJKoZIhvcNAQEN\nBQAwJTEjMCEGA1UEAwwaKi5mcmVlLmZsZXVyLnJhdmVuZGIuY2xvdWQwHhcNMjEx\nMjI0MDAwMDAwWhcNMjYxMjI0MDAwMDAwWjAVMRMwEQYDVQQDDApmcmVlLmZsZXVy\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAjq2t0qApEH9tuINiOqjI\nxiqiInzUN9uU1NMX61FXqHpXRxYgDT8Rq8jlgOKi44n8XtpOnkVxfsb4ZtQ8RlUM\nnYFgz+Ff3kxJU0M/x9W0AHMTuKF5baJ1J1z5bLzxdmLACn8yneAV/t9fiuLFwShT\nJlL+VuPJC58dnOnCuHtvu5IA9x+/qxuuScyCAP9xhGf1G/D3UM8MZOevB8iH1ZPb\nGrKDmZ05GhmJ7mA3UdBL4ace6YjxcefihZ2qwj3S/8LDgPjogu6WKXCzMEsSqoM6\nW5zdATsjaFJ8vSk35KwzmL4jjPjaBm3WxH4ysglyFmtZZx7RlQLTD/LMgIgBzqfj\nwrSqUDXNSiQzUj/r0a7ltO4/PYNE8+CogafC//0pgts8d3rynL8UT1L4oQUSEimN\nxwwXlTeLljNUmBT616N7CXkv5iEhgwtOlGft6pRahA+TkWRjHIj9EnzqnAwcNR9G\n7yRYqfPIBaMrlnogxzDz/bfpTkHZRMDOJFprW7iyooe0qo512uaPc0y4FHOgsBGO\nF38RcXYwxJ3/x/ndLzKVBTWJLNRnV3UcYYK0muFMQhSkwspG5fRdkSGV8TQxXKt7\nNGviKEhPd1UIxMpZWX+GZrZracAvMjtPQdMVQ0+RKKeBEsNQHgiqii8PrjfZv5x9\n+dEOzZCkaZubRKipxHgcdJ8CAwEAAaM7MDkwHwYDVR0jBBgwFoAU1ZA/ZTJLl+Bx\n8eohEGIwzlYeqWYwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJKoZIhvcNAQEN\nBQADggIBAGHPBi+NcSKZQFxeewTzTMVQlnRxnK+0kJkXxdXjSI1oMG6tb8dyHUxf\nuPloqJdyzCzuC9YhNQqEmUZYe5VceltjgZPmafOT9ZFDmTKihis7rfVfNEa3mnGI\ng+siiR5vi2G4wIQ/Q/Ak0EEzlpNSHtbkAnGZXROhfWx/pEWvbbHisUjD3QYgUkiV\nHqgEOneexOKg0hHPGctuYx8aaxrloMzGmBCQl0735ooqn5FkaeVLCzRv2k9sOAxg\nk2Xq4bBP22z7PYlUPS7xtjppHROZnFF3H91h7W21hkGFyKhtxzGBBDAQ0NQx1/8z\ntyauE2DgE1yIAxr2ev1QP7reTo3DEIyWUYHspBJpa7KtW+9YXLLRrPecA9eoZuXp\nvHZ6BoWR8hbcDzv7ZRjpqD8KNeQNMNcmAiH4924Km3Sefd6b0KuC3clQz/AlrXlG\nlDsC0ikptZSxvfvGSwN0oN4PbshDpsWvFzedJJd+hy1CJF3zc/fNFrQOFoqpXsdW\ng7QBR0+mgPdt5yFsNjNmRQX+gpVwGanGQB4o/bHmQgPRU/e/XXKMKb2UMxgGBPYo\nGP2fpDIYF/LvKs1hWMBcnge2ko2lpKZO3o+kJS8Fh98XV3KIfxVTfjznvLFemboF\n8Hf+CHJDJuANJxY7/qqXd6acb26vrLNqelt4i5z5viSuB9iT290Y\n-----END CERTIFICATE-----\n-----BEGIN RSA PRIVATE KEY-----\n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\n-----END RSA PRIVATE KEY-----";
console.log("RAVEN CERT");
console.log(RAVEN_CERT);
