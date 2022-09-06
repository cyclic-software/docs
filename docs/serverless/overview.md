---
sidebar_position: 1
---

# Overview

Cyclic apps are serverless, this gives apps the ability to scale up to handle a huge volume of traffic or scale down to zero when there is no traffic. Scaling up and down happens very quickly *(~0.2 seconds)*. This ability to scale down to zero is what allows us to offer many [free features](https://cyclic.sh/pricing) that make cyclic [different](/).

Two important attributes of serverless that should be considered when developing or migrating applications for serverless environments:

#### Compute is provisioned on-demand
- runtime is started when it is needed
- runtime suspended quickly after
- multiple runtimes can be active simultaneously

#### Compute is stateless
- runtimes do not retain memory after they are shut down
- write access is only available to the `/tmp` directory
- simultaneously active runtimes do not share memory or `/tmp` disk
  

