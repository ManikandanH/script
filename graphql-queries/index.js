const PRODUCT_BODY = `
...ProductInfo
categories {
  id
  primary
  sequence
}
specializations {
  id
}
availableChildProducts {
  ...ChildInfo
  product {
    ...ProductInfo
    availableChildProducts {
      ...ChildInfo
      product {
        ...ProductInfo
      }
      group {
        name
        members {
          ...GroupInfo
          product {
            ...ProductInfo
          }
        }
      }
    }
  }
  group {
    name
    members {
      ...GroupInfo
      product {
        ...ProductInfo
        availableChildProducts {
          ...ChildInfo
          product {
            ...ProductInfo
          }
          group {
            name
            members {
              ...GroupInfo
              product {
                ...ProductInfo
              }
            }
          }
        }
      }
    }
  }
}`;

const PRODUCT_FRAGMENTS = `
fragment ChildInfo on AvailableProduct {
  associationPoint
  min
  max
  default
  externalIds {
    key
    value
  }
}

fragment GroupInfo on AvailableProduct {
  default
  externalIds {
    key
    value
  }
}

fragment ProductInfo on Product {
  id
  name
  description
  active
  masterId
  effectiveStartDate
  effectiveEndDate
  commercialProductCode
  offerCode
  role(version: "2-0-0")
  type
  billingFrequency
  contractTerm
  pricing(prgs: $pricingCodes) {
    ...PricingInfo
  }
  customFields {
    key
    value
  }
  commercialProductMetadata {
    attributeMetadata {
      version
      attributes {
        name
        defaultValue
        values {
          value
          label
        }
        variant
        readOnly
        mappedCPField
      }
    }
  }
}

fragment PricingInfo on DefinitionPricing {
  charges {
    __typename
    ... on DefinitionCharge {
      version
      name
      chargeType
      listPrice
      salesPrice
      description
      source
    }
  }
  discounts {
    __typename
    ... on DefinitionDiscount {
      version
      discountCharge
      chargeType
      discountPrice
      type
      amount
      description
      duration
      recurringOffset
      source
      evaluationOrder
      recordType
    }
  }
  listOneOffPrice
  salesOneOffPrice
  unitListOneOffPrice
  unitSalesOneOffPrice
  totalListOneOffPrice
  totalSalesOneOffPrice
  listRecurringPrice
  salesRecurringPrice
  unitListRecurringPrice
  unitSalesRecurringPrice
  totalListRecurringPrice
  totalSalesRecurringPrice
}`;
export const PRODUCTS_IN_CATALOGUE_GRAPHQL = `
query ProductsInCatalogue($catalogueId: ID!, $pricingCodes: [String!]!, $page: PageCursorInput) {
  productsInCatalogue(catalogueId: $catalogueId, page: $page) {
    data {
      id
    }
    hasMore
    nextPage {
      after
      limit
    }
  }
}

${PRODUCT_FRAGMENTS}`;

export const PRODUCTS_GRAPHQL = `
query ProductsByIds($productIds: [ID]!, $pricingCodes: [String!]!) {
  productsByIds(productIds: $productIds) {
      ${PRODUCT_BODY}
  }
}

${PRODUCT_FRAGMENTS}`;
