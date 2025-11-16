---@meta rdgs.CPropertyBuilding
-- Generated File, do not edit (template Declaration.stg)

---@class rdgs.CPropertyBuilding
---@field HasUpgrade boolean		Returns true, if this building has an upgrade target
local CPropertyBuilding = {}
---@param self rdgs.CPropertyBuilding
---@param includePublicServiceEffects boolean
---@return rdgs.CTextSourceListValue[]
function CPropertyBuilding.GetEffectsFromBuildingIncludingAdditionalFunctionEffects(self, includePublicServiceEffects ) end
---@return boolean returns true if weak pointer holds a valid reference
function CPropertyBuilding.isValid() end

return CPropertyBuilding
