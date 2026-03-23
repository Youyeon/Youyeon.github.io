---
title:          "An Accelerator for Low-computational Overhead Privacy-Preserving GNN Inference"
date:           2025-09-12 21:00:00 KST
selected:       false
pub:            "IEEE International Conference on High Performance Computing, Data, and Analytics (HiPC)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2025"

abstract: >-
  Graph Neural Networks (GNNs) involve both node features and graph structure, which can be sensitive. Existing FHE-GNN approaches often rely on costly rotations or MUX operations for operand obfuscation, incurring significant overhead. This paper proposes a new obfuscation method that instead duplicates ciphertexts at the client side, and designs a pipelined hardware accelerator with a simplified CKKS datapath and parallel TFHE execution to avoid the rotation-heavy designs.
# cover:          /assets/images/covers/cover3.jpg
authors:
  - Heonhui Jung*
  - Whoiree Ha*
  - Kevin Nam
  - Youyeon Joo
  - Lucas Oros
  - Yunheung Paek#
links:
  Paper: https://doi.org/10.1109/HiPC66333.2025.00011
---
