# Bridge Command

- [`register-resource`](#register-resource)
- [`set-burn`](#set-burn)
- [`cancel-proposal`](#cancel-proposal)
- [`query-proposal`](#query-proposal)
- [`query-resource`](#query-resouce)


## `register-resource`
Register a resource ID with a contract address for a handler.

```
  --bridge <address>          Bridge contract address
  --handler <address>         Handler address
  --targetContract <address>  Contract address to be registered
  --resourceId <address>      Resource ID to be registered
```

## `set-burn`
Set a token contract as mintable/burnable in a handler.

```
  --bridge <address>         Bridge contract address
  --handler <address>        ERC20 handler contract address
  --tokenContract <address>  Token contract to be registered
```

## `cancel-proposal`
Cancels an expired proposal.

```
  --bridge <address>      Bridge contract address
  --chainId <id>          Chain ID of proposal to cancel
  --depositNonce <value>  Deposit nonce of proposal to cancel
```

## `query-proposal`
Queries an inbound proposal.

```
  --bridge <address>      Bridge contract address 
  --chainId <id>          Source chain ID of proposal
  --depositNonce <value>  Deposit nonce of proposal
  --dataHash <value>      Hash of proposal metadata
```

## `query-resouce`
Queries the contract address associated with the provided resource ID for a specific handler contract.

```
  --handler <address>     Handler contract address 
  --resourceId <address>  ResourceID to query

```