import React from 'react'
import { TargetEnum } from '../CardContainerLogic'
import { Link } from '@mui/material'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'

export type LinkifyProps = {
  text: string
  className?: string
}

export type LinkifyRule = {
  regex: RegExp
  onMatch: (value: string) => string
}

const synapseIdRule: LinkifyRule = {
  regex: SYNAPSE_ENTITY_ID_REGEX,
  onMatch: value => `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${value}`,
}

const httpRule: LinkifyRule = {
  regex: /((ftp|http|https):\/\/[^ ",]+)/,
  onMatch: value => value,
}

const pubMedRule: LinkifyRule = {
  regex: /(PMID:\d+)/,
  onMatch: value => {
    const id = value.slice('PMID:'.length)
    return `https://pubmed.ncbi.nlm.nih.gov/${id}`
  },
}
const mutationIdRule: LinkifyRule = {
  regex: /(MGI:\d+)/,
  onMatch: value => `https://www.informatics.jax.org/allele/${value}`,
}
const sciCrunchResolverRule: LinkifyRule = {
  regex:
    /(AB_\d+)|(Addgene_\d+)|(CVCL_[a-zA-Z0-9]+)|(MMRRC_\d+-.{3})|(IMSR_JAX:\d+)/,
  onMatch: value => `https://scicrunch.org/resolver/${value}`,
}
const clinVarVCVRule: LinkifyRule = {
  regex: /(ClinVar:VCV\d+)/,
  onMatch: value => {
    const id = value.slice('ClinVar:'.length)
    return `https://www.ncbi.nlm.nih.gov/clinvar/variation/${id}`
  },
}
const clinVarRCVRule: LinkifyRule = {
  regex: /(ClinVar:RCV\d+)/,
  onMatch: value => {
    const id = value.slice('ClinVar:'.length)
    return `https://www.ncbi.nlm.nih.gov/clinvar/${id}`
  },
}

const rules: LinkifyRule[] = [
  httpRule,
  synapseIdRule,
  pubMedRule,
  sciCrunchResolverRule,
  mutationIdRule,
  clinVarVCVRule,
  clinVarRCVRule,
]

const Linkify: React.FC<LinkifyProps> = ({ text, className }) => {
  const parts = text.split(
    new RegExp(rules.map(r => r.regex.source).join('|'), 'g'),
  )

  return (
    <p>
      {parts.map((part, index) => {
        const match = rules.find(r => r.regex.test(part))
        if (match) {
          return (
            <Link
              href={match.onMatch(part)}
              key={index}
              target={TargetEnum.NEW_WINDOW}
              rel="noopener noreferrer"
              className={className}
            >
              {part}
            </Link>
          )
        }
        // else
        return part
      })}
    </p>
  )
}

export default Linkify
