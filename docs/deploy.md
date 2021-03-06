# Deploy Command

This command can be used to deploy all or some of the contracts required for bridging.

Selection of contracts can be made by either specifying `--all` or a subset of these:
```
  --bridge                     Deploy bridge contract
  --erc20Handler               Deploy erc20Handler contract
  --erc20                      Deploy erc20 contract
  --config                     Logs the configuration based on the deployment
```

If you are deploying the Bridge contract, you may want to specify these options as well:
```
  --chainId <value>           Chain ID for the instance
  --relayers <value>          List of initial relayers
  --relayerThreshold <value>  Number of votes required for a proposal to pass
  --fee <value>               Fee to be taken when making a deposit (in Ether)
```