// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Written Wonder by 1DST', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'scriptorite', // desired subdomain name
  owner: {
    repo: 'Scriptorite/scriptorite.github.io',
    email: 'melonmasteristaken@gmail.com,
  },
  record: {
    CNAME: 'scriptorite.github.io // e.g.: <your-github-account>.github.io
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
