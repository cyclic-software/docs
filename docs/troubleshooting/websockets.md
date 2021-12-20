---
sidebar_position: 2
---

# Websockets

Websockets are currently not supported in Cyclic apps.

## Why?
Serverless functions are active on-demand for just long enough to process a single event. After the processing task is finished, often just a few milliseconds, the runtime is suspended until it is again invoked by another event. The on-demand short lifecycle enables applications to have massive scalability with almost no idle cost. 

Websockets require a persistent bi-directional link. In most Websockets implementations, for an idle connection, a compute instance must be reserved for the duration of the connection regardless of whether a message is available for processing or not. At the same time, if a high traffic volume is possible - potentially many compute instances should be reserved in anticipation. This creates the need for further complexity in capacity planning and  managing tasks to facilitate the scaling up and down of the sizing and number of compute instances. 


